# setup a centos image with ows binary components
FROM centos:latest
RUN yum -y install git curl which xz tar findutils
RUN groupadd ows
RUN useradd ows -m -s /bin/bash -g ows
ENV HOME /home/ows
USER ows
RUN curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.29.0/install.sh | bash
RUN /bin/bash -l -c "nvm install v4 && nvm alias default v4"
RUN /bin/bash -l -c "npm install ows -g"
