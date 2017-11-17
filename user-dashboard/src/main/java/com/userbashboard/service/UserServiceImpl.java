package com.userbashboard.service;

import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.userbashboard.common.exception.ResourceNotFoundException;
import com.userbashboard.model.UserEntity;
import com.userbashboard.repository.UserRepository;
import static com.userbashboard.common.UserConstants.*;


/**
 * @author Himanshu user service Implementation
 *
 */
@Service
public class UserServiceImpl implements UserService {

	@Autowired
	UserRepository userRepository;

	/**
	 * this method save the userEntity info into database
	 * 
	 * @param userEntity
	 *            contains user all info
	 * @return save confirmation message
	 * @throws ResourceNotFoundException
	 */
	@Override
	public String saveData(UserEntity userEntity) {
		// TODO Auto-generated method stub
		userRepository.save(userEntity);

		return USER_SAVED_SUCCESS;
	}

	/**
	 * this method update the user info into database
	 * 
	 * @param userEntity
	 *            contains user updated info
	 * @return update confirmation message
	 * @throws ResourceNotFoundException
	 */
	@Override
	public String update(UserEntity userEntity) throws ResourceNotFoundException {
		// TODO Auto-generated method stub
		UserEntity userEntity1 = userRepository.findOne(userEntity.getUserId());
		userEntity1.setUserName(userEntity.getUserName());
		userEntity1.setUserPassword(userEntity.getUserPassword());
		userEntity1.setUserStatus(userEntity.getUserStatus());
		userEntity1.setUserLastName(userEntity.getUserLastName());
		userEntity1.setUserEmail(userEntity.getUserEmail());
		userRepository.save(userEntity1);
		return "UserUpdated";
	}

	/**
	 * this method authenticate the login user
	 * 
	 * @param userEntity
	 *            contains userName for authentication
	 * @return confirmation message for authentication
	 * @throws ResourceNotFoundException
	 */
	@Override
	public UserEntity AuthenticateUser(UserEntity userEntity) {
		// TODO Auto-generated method stub
		String userName = "";
		UserEntity userEntity1 = userRepository.findByUserName(userEntity.getUserName());
		return userEntity1;
	}

	/**
	 * This method return saved user list
	 * 
	 * @return list of user with detail
	 * @throws ResourceNotFoundException
	 */
	@Override
	public List<UserEntity> getAllUser() {
		// TODO Auto-generated method stub
		List<UserEntity> userEntity = (List<UserEntity>) userRepository.findAll();

		return userEntity;
	}

	/**
	 * this method delete the user by userId
	 * 
	 * @param id
	 * @return confirmation message for user delete
	 * @throws ResourceNotFoundException
	 */
	@Override
	public String deleteUser(long id) {
		userRepository.delete(id);
		return "UserDeleted";
	}

}