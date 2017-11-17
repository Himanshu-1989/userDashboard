package com.userbashboard.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.userbashboard.common.exception.ResourceNotFoundException;
import com.userbashboard.model.UserEntity;

/**
 * @author Himanshu
 * User Operation methods
 */
@Service
public interface UserService {
 /**
 * this  method save the userEntity info into database
 * @param userEntity contains user all info
 * @return save confirmation message
 * @throws ResourceNotFoundException
 */
	String saveData(UserEntity userEntity) throws ResourceNotFoundException;
	
/**
 * this method update the user info into database
 * @param userEntity contains user updated info
 * @return update confirmation message
 * @throws ResourceNotFoundException
 */
	String update(UserEntity userEntity) throws ResourceNotFoundException;
	
/**
 * this method authenticate the login user
 * @param userEntity contains userName for authentication
 * @return confirmation message  for authentication
 * @throws ResourceNotFoundException
 */
	UserEntity AuthenticateUser(UserEntity userEntity) throws ResourceNotFoundException;
/**
 * This method return saved user list
 * @return  list of user with detail
 * @throws ResourceNotFoundException
 */
	List<UserEntity> getAllUser() throws ResourceNotFoundException;
/**
 * this method delete the user by userId
 * @param id
 * @return confirmation message for user delete 
 * @throws ResourceNotFoundException
 */
	String deleteUser(long id) throws ResourceNotFoundException;
}
