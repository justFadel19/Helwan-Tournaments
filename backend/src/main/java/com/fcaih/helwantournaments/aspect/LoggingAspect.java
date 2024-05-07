package com.fcaih.helwantournaments.aspect;

import org.apache.commons.lang3.StringUtils;
import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.Around;
import org.aspectj.lang.annotation.Aspect;
import org.springframework.stereotype.Component;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

@Aspect
@Component
public class LoggingAspect {

    Logger log = LoggerFactory.getLogger(LoggingAspect.class);
    @Around(value = "execution(* com.fcaih.helwantournaments.service..*(..))")
    public Object logTime(ProceedingJoinPoint joinPoint) throws Throwable {

        Long startTime = System.currentTimeMillis();
        StringBuilder logMessage = new StringBuilder("KPI:");
        logMessage.append("[").append(joinPoint.getKind()).append("]\tfor").append(joinPoint.getSignature())
                .append("\twithArgs: ").append("(").append(StringUtils.join(joinPoint.getArgs(), ",")).append(")");
        logMessage.append("\ttook: ");

        Object returnValue = joinPoint.proceed();

        log.info(logMessage.append(System.currentTimeMillis() - startTime).append("ms").toString());

        return returnValue;
    }

}