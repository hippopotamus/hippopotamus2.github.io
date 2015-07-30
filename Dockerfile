FROM ubuntu:14.04

RUN apt-get update

RUN apt-get install -y curl git

RUN gpg --keyserver hkp://keys.gnupg.net --recv-keys 409B6B1796C275462A1703113804BB82D39DC0E3

RUN curl -sSL https://get.rvm.io | bash -s stable

RUN /bin/bash -l -c "rvm requirements"
RUN /bin/bash -l -c "rvm install 2.0"
RUN /bin/bash -l -c "gem install bundler --no-ri --no-rdoc"

COPY . /srv
WORKDIR /srv/

EXPOSE 4000

CMD jekyll serve
