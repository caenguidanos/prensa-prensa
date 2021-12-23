package lib

import "os"

func GetMicroserviceUrl(preffix string) (string, string, string, string) {
	backendServiceQueryEnv := os.Getenv("BACKEND_SERVICE_QUERY")
	backendServiceCommandEnv := os.Getenv("BACKEND_SERVICE_COMMAND")

	if len(backendServiceQueryEnv) == 0 {
		backendServiceQueryEnv = "http://localhost:4001"
	}

	if len(backendServiceCommandEnv) == 0 {
		backendServiceCommandEnv = "http://localhost:4002"
	}
	return backendServiceQueryEnv, backendServiceQueryEnv + preffix, backendServiceCommandEnv, backendServiceCommandEnv + preffix
}
