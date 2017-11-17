package com.userbashboard.common;

/**
 * @author Himanshu response bean for UserDashboard
 */
public class UserCommonResponse {
	/**
	 * response success and failure message
	 */
	private String message;

	/**
	 * response status code of service
	 */
	private String statusCode;

	/**
	 * @return response message
	 */
	public String getMessage() {
		return message;
	}

	/**
	 * set response message
	 * 
	 * @param message
	 */
	public void setMessage(String message) {
		this.message = message;
	}

	/**
	 * return response status code
	 * 
	 * @return
	 */
	public String getStatusCode() {
		return statusCode;
	}

	/**
	 * set response status code
	 * 
	 * @param statusCode
	 */
	public void setStatusCode(String statusCode) {
		this.statusCode = statusCode;
	}

	public UserCommonResponse() {

	}

	public UserCommonResponse(String msg, String statusCode) {
		this.message = msg;
		this.statusCode = statusCode;
	}

}
