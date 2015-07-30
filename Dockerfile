FROM ubuntu:14.04

RUN apt-get update

RUN apt-get install -y curl git

RUN gpg --keyserver hkp://keys.gnupg.net --recv-keys 409B6B1796C275462A1703113804BB82D39DC0E3

RUN curl -sSL https://get.rvm.io | bash -s stable --rails

RUN source ~/.rvm/scripts/rvm

RUN gem install jekyll

COPY . /srv
WORKDIR /srv/

EXPOSE 4000

CMD jekyll serve
