docker image build -t typing-test:latest .
docker run -p 8080:5173 --name app typing-test:latest

docker image rm typing-test:latest