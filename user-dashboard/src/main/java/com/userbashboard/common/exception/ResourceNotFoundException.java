package com.userbashboard.common.exception;

/**
 * @author Himanshu Exception handling for userDashboard Application
 */
public class ResourceNotFoundException extends Exception {

	private static final long serialVersionUID = 1L;

	/**
	 * exception message
	 */
	private String message;

	/**
	 * exception statuscode
	 */
	private String statusCode;

	/*
	 * return exception message
	 * 
	 * @see java.lang.Throwable#getMessage()
	 */
	public String getMessage() {
		return message;
	}

	/**
	 * set exception message
	 * 
	 * @param message
	 */
	public void setMessage(String message) {
		this.message = message;
	}

	/**
	 * return exception statuscode
	 * 
	 * @return
	 */
	public String getStatusCode() {
		return statusCode;
	}

	/**
	 * set exception status code
	 * 
	 * @param statusCode
	 */
	public void setStatusCode(String statusCode) {
		this.statusCode = statusCode;
	}

	/**
	 * set only exception messsage
	 * 
	 * @param errorMessage
	 */
	public ResourceNotFoundException(String errorMessage) {
		super(errorMessage);
		this.message = errorMessage;

	}

	/**
	 * set user defined exception message with status code
	 * 
	 * @param errorMessage
	 * @param param
	 */
	public ResourceNotFoundException(String errorMessage, String param) {
		super(errorMessage);
		this.message = errorMessage;
		this.statusCode = param;

	}

	/**
	 * calling base Exception
	 */
	public ResourceNotFoundException() {
		super();
	}

}
