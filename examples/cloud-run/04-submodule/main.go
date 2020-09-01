package main

import (
	"fmt"
	"github.com/mrdulin/go-gcp/examples/cloud-run/04-submodule/app/reports"
	"log"
	"net/http"
)

func handler(w http.ResponseWriter, r *http.Request) {
	log.Println("received a request")
	_, err := fmt.Fprintf(w, "report: %s\n", reports.GetAdReport())
	if err != nil {
		log.Fatal(err)
	}
}

func main() {
	http.HandleFunc("/", handler)
	log.Fatal(http.ListenAndServe(":8080", nil))
}
