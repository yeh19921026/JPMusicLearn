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

	}
}
