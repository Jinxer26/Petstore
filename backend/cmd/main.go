package main

import (
	"fmt"
	"net"

	"github.com/Jinxer26/Petstore/internal/config"
	"github.com/Jinxer26/Petstore/internal/server"
)

func main() {

	cfg := config.Config{
		Socket: &net.TCPAddr{
			IP:   net.ParseIP("127.0.0.1"),
			Port: 8080,
		},
		Logfile: "logs/log.txt",
	}

	fmt.Println("Start of PET Store")

	// Start Logger
	fmt.Printf("Log Initialised at %s\n", cfg.Logfile)

	// Start Server
	server.StartServer(cfg.Socket.IP, cfg.Socket.Port)
	fmt.Printf("Listening on %s\n", cfg.Socket.String())
}
