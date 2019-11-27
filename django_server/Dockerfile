FROM python:3.6.0

WORKDIR /usr/src/app

RUN pip install Django

RUN pip install pipenv

COPY Pipfile /usr/src/app/

COPY . /usr/src/app/

RUN pipenv install

RUN python manage.py migrate

EXPOSE 8100

CMD [ "python", "manage.py", "runserver", "0.0.0.0:8000"]