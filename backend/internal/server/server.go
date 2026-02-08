package server

import (
	"net"
	"net/http"
	"strconv"

	"github.com/gin-gonic/gin"
)

func StartServer(ip net.IP, port int) {
	router := gin.Default()

	router.GET("/health", func(c *gin.Context) {
		c.JSON(http.StatusOK, gin.H{
			"message": "Server is Ok!",
		})
	})

	router.Run(net.JoinHostPort(ip.String(), strconv.Itoa(port)))
}
