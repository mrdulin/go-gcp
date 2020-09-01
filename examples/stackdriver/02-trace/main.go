package main

import (
	"log"
	"net/http"
	"os"
	"path"

	"google.golang.org/api/option"

	"go.opencensus.io/plugin/ochttp"

	"contrib.go.opencensus.io/exporter/stackdriver"
	"contrib.go.opencensus.io/exporter/stackdriver/propagation"
	"go.opencensus.io/trace"
)

func main() {

	exporter, err := stackdriver.NewExporter(stackdriver.Options{
		ProjectID: os.Getenv("GOOGLE_CLOUD_PROJECT"),
		TraceClientOptions: []option.ClientOption{
			option.WithCredentialsFile(path.Join("../../.gcp/stackdriver-02-trace-admin.json")),
		},
	})
	if err != nil {
		log.Fatal(err)
	}
	trace.RegisterExporter(exporter)
	trace.ApplyConfig(trace.Config{DefaultSampler: trace.AlwaysSample()})

	client := &http.Client{
		Transport: &ochttp.Transport{
			Propagation: &propagation.HTTPFormat{},
		},
	}

	handler := http.HandlerFunc(func(writer http.ResponseWriter, request *http.Request) {
		req, _ := http.NewRequest("GET", "https://www.google.com", nil)
		req = req.WithContext(request.Context())
		resp, err := client.Do(req)
		if err != nil {
			log.Fatal(err)
		}
		resp.Body.Close()
	})
	http.Handle("/test", handler)
	port := os.Getenv("PORT")
	if port == "" {
		port = "8080"
	}
	log.Printf("Listening on port %s", port)
	httpHandler := &ochttp.Handler{
		Propagation: &propagation.HTTPFormat{},
	}
	if err := http.ListenAndServe(":"+port, httpHandler); err != nil {
		log.Fatal(err)
	}
}
