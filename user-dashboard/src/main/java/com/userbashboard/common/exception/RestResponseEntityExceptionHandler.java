package com.userbashboard.common.exception;

import javax.servlet.http.HttpServletResponse;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

import static org.springframework.core.annotation.AnnotatedElementUtils.findMergedAnnotation;

/**
 * @author Himanshu
 * Advice Controller for userdashboard application
 */
@ControllerAdvice
public class RestResponseEntityExceptionHandler extends ResponseEntityExceptionHandler {

	@ExceptionHandler(value = { ResourceNotFoundException.class })
	public ResponseEntity<Object> handleResourceException(ResourceNotFoundException ex, HttpServletResponse response,
			WebRequest request) {
		ResourceNotFoundException body = new ResourceNotFoundException(ex.getMessage(), ex.getStatusCode());
		HttpStatus responseStatus = resolveAnnotatedResponseStatus(ex);

		return new ResponseEntity<Object>(body, responseStatus);

	}

	HttpStatus resolveAnnotatedResponseStatus(Exception exception) {

		ResponseStatus annotation = findMergedAnnotation(exception.getClass(), ResponseStatus.class);
		if (annotation != null) {
			return annotation.value();
		}

		return HttpStatus.OK;

	}

}
