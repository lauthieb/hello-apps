FROM frolvlad/alpine-oraclejdk8:slim
VOLUME /tmp
ADD spring-boot-0.0.1-SNAPSHOT.jar app.jar
RUN sh -c 'touch /app.jar'
ENTRYPOINT ["java","-Djava.security.egd=file:/dev/./urandom", "-Dspring.profiles.active=container", "-jar","/app.jar"]
EXPOSE 8080 8083
