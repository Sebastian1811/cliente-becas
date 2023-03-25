FROM python:3.10.7-bullseye


#RUN apk add update && apk add upgrade
#RUN apk add git openssh
#RUN apk add gcc g++ make
WORKDIR /app
#COPY id_rsa .
COPY backend/requirements.txt .
RUN pip install -r requirements.txt
#COPY backend .
# RUN mkdir /root/.ssh/ && cat id_rsa > /root/.ssh/id_rsa && chmod 600 /root/.ssh/id_rsa && ssh-keyscan github.com >> /root/.ssh/known_hosts
# RUN git clone git@github.com:Sebastian1811/Procesamiento_DataSets.git
# RUN cd Procesamiento_DataSets && git pull && git switch expose-models-rest && git pull
# RUN rm -r  /root/.ssh/
# RUN rm id_rsa
RUN rm requirements.txt
COPY requirements.txt .
RUN pip install -r requirements.txt
RUN rm requirements.txt
#RUN mkdir backend

CMD ["uvicorn", "backend.app:app","--reload","--host", "0.0.0.0", "--port", "3000"]
#ENTRYPOINT  ["sh"]
EXPOSE 3000