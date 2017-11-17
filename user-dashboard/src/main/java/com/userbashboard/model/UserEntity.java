package com.userbashboard.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Lob;
import javax.persistence.Table;

import org.dom4j.tree.AbstractEntity;
import org.hibernate.annotations.Type;

/**
 * @author Himanshu
 * user table with column details
 */
@Entity
@Table(name = "USER_DETAIL")
public class UserEntity extends AbstractEntity implements java.io.Serializable {

	private static final long serialVersionUID = 4910225916550731446L;
   
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "user_id", unique = true, nullable = false)
	private long userId;

	@Column(name = "user_name")
	@Lob
	@Type(type = "org.hibernate.type.TextType")
	private String userName;

	@Column(name = "user_lastname")
	@Lob
	@Type(type = "org.hibernate.type.TextType")
	private String userLastName;

	@Column(name = "user_email")
	@Lob
	@Type(type = "org.hibernate.type.TextType")
	private String userEmail;

	@Column(name = "user_password")
	@Lob
	@Type(type = "org.hibernate.type.TextType")
	private String userPassword;

	@Column(name = "user_status")
	@Lob
	@Type(type = "org.hibernate.type.TextType")
	private String userStatus;

	public String getUserPassword() {
		return userPassword;
	}

	public void setUserPassword(String userPassword) {
		this.userPassword = userPassword;
	}

	public String getUserStatus() {
		return userStatus;
	}

	public void setUserStatus(String userStatus) {
		this.userStatus = userStatus;
	}

	public long getUserId() {
		return userId;
	}

	public void setUserId(long userId) {
		this.userId = userId;
	}

	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	public String getUserLastName() {
		return userLastName;
	}

	public void setUserLastName(String userLastName) {
		this.userLastName = userLastName;
	}

	public String getUserEmail() {
		return userEmail;
	}

	public void setUserEmail(String userEmail) {
		this.userEmail = userEmail;
	}


	
}
