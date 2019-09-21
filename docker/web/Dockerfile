FROM python:3.7.3
WORKDIR /home/app
# COPY ./src .
COPY ./src/requirements.txt .

RUN pip install -r requirements.txt

CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]