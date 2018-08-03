package auth0

import (
	"errors"
	"fmt"
	"log"
	"net/http"
	"os"

	"github.com/dgrijalva/jwt-go"
	"github.com/gin-gonic/gin"

	jwtmiddleware "github.com/auth0/go-jwt-middleware"
)

var jwtMiddleWare *jwtmiddleware.JWTMiddleware

func JWTInit() {
	jwtMiddleware := jwtmiddleware.New(
		jwtmiddleware.Options{
			ValidationKeyGetter: func(token *jwt.Token) (interface{}, error) {
				//varify audience
				aud := os.Getenv("AUTH0_API_AUDIENCE")
				checkAudience := token.Claims.(jwt.MapClaims).VerifyAudience(aud, false)
				//fmt.Println(token.Claims.(jwt.MapClaims)["aud"])
				if !checkAudience {
					return token, errors.New("Invalid audience")
				}
				//varify issuer
				iss := os.Getenv("AUTH0_DOMAIN")
				checkIss := token.Claims.(jwt.MapClaims).VerifyIssuer(iss, false)
				if !checkIss {
					return token, errors.New("Invalid issuer")

				}
				cert, err := getPemCert(token)
				if err != nil {
					log.Fatalf("could not get cert: %+v", err)
				}
				result, _ := jwt.ParseRSAPublicKeyFromPEM([]byte(cert))
				return result, nil
			},
			SigningMethod: jwt.SigningMethodRS256,
			//UserProperty:  "sub",
		})
	jwtMiddleWare = jwtMiddleware
}
func AuthMiddleware() gin.HandlerFunc {
	return func(c *gin.Context) {
		err := jwtMiddleWare.CheckJWT(c.Writer, c.Request)
		if err != nil {
			fmt.Print("CheckJWT error: ")
			fmt.Println(err)

			c.Abort()
			c.Writer.WriteHeader(http.StatusUnauthorized)
			c.Writer.Write([]byte("Unauthorized"))
		}
		//fmt.Println(c.Request)
		/*send a request to auth0 to get id token
		url := "https://tses.auth0.com/userinfo"

		req, _ := http.NewRequest("GET", url, nil)
		req.Header.Add("Authorization", c.Request.Header.Get("Authorization"))
		req.Header.Add("content-type", "application/json")

		res, _ := http.DefaultClient.Do(req)

		defer res.Body.Close()
		body, _ := ioutil.ReadAll(res.Body)
		fmt.Println("string(body):", string(body))*/
	}
}
