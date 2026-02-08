package config

import (
	"net"
)

type Config struct {
	Socket  *net.TCPAddr
	Logfile string
}
