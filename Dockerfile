FROM nginx
COPY index.html /usr/share/nginx/html/index.html
#FROM python:3.8-slim
#
#COPY . /app
#
#RUN \ 
# pip3 install flask  \
# pip install PyMySQL 
#
#WORKDIR /app
#
#CMD ["python3", "-m", "flask", "run", "--host=0.0.0.0"]
#
#FROM  python
