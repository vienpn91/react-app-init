FROM python:3.6.9

WORKDIR /usr/src/app

RUN pip install Django

COPY . .

EXPOSE 8000

CMD [ "python", "manage.py", "runserver", "0.0.0.0:8000" ]
