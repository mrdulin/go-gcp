#!/usr/bin/env bash

cd "$(dirname "$0")"
go mod vendor && gcloud functions deploy GetAdPerformanceReport --runtime=go111 --trigger-http