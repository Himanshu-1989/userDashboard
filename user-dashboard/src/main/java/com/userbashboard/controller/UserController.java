package com.userbashboard.controller;

import java.util.List;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.Environment;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import com.userbashboard.common.UserCommonResponse;
import com.userbashboard.common.exception.ResourceNotFoundException;
import com.userbashboard.model.UserEntity;
import com.userbashboard.service.UserService;
import static com.userbashboard.common.UserConstants.*;

/**
 * @author Himanshu 
 * Controller to handle Userdashboard Operations
 */
@RestController
@RequestMapping("/user")
public class UserController {
	@Autowired
	private Environment env;

	@Autowired
	UserService userOperationService;

	final static Logger logger = Logger.getLogger(UserController.class);

	/**
	 * This service add the user all details into database
	 * 
	 * @param user
	 *            request entity its contain user info.
	 * @return common response with message and status code.
	 * @throws ResourceNotFoundException
	 */
	@RequestMapping(value = "/adduser", method = RequestMethod.POST, produces = "application/json")
	public ResponseEntity<UserCommonResponse> getUser(@RequestBody UserEntity user) throws ResourceNotFoundException {
		try {
			logger.info("add user: enter into AddUser Service");
			userOperationService.saveData(user);
			return new ResponseEntity<UserCommonResponse>(new UserCommonResponse(USER_SAVED_SUCCESS, STATUS_200),
					HttpStatus.OK);
		} catch (Exception e) {
			logger.error("add user: not able to add user with error" + e.getMessage());
			throw new ResourceNotFoundException(USER_SAVED_FAILED, STATUS_422);
		}
	}

	/**
	 * This service check that username is already in database or not
	 * 
	 * @param user
	 *            request entity with username to check duplicate user
	 * @return response with user is new user or user already exists
	 * @throws Exception
	 */
	@RequestMapping(value = "/duplicate", method = RequestMethod.POST, produces = "application/json")
	public ResponseEntity<UserCommonResponse> duplicateCheck(@RequestBody UserEntity user) throws Exception {
		try {
			logger.info("check duplicate: enter into duplicate service");
			if (userOperationService.AuthenticateUser(user).getUserName().equals(user.getUserName())) {
				return new ResponseEntity<UserCommonResponse>(new UserCommonResponse(DUPLICATE_USER, STATUS_200),
						HttpStatus.OK);
			} else
				logger.info("check duplicate : username is unique");
			return new ResponseEntity<UserCommonResponse>(new UserCommonResponse(NEW_USER, STATUS_200), HttpStatus.OK);
		} catch (Exception e) {
			logger.error("check duplicate: duplicate service failed with error" + e);
			return new ResponseEntity<UserCommonResponse>(new UserCommonResponse(NEW_USER, STATUS_200), HttpStatus.OK);
		}
	}

	/**
	 * this serve update the user detail with admin access
	 * 
	 * @param user
	 *            request entity its contain user updated info.
	 * @return response with user update or not
	 * @throws ResourceNotFoundException
	 */
	@RequestMapping(value = "/updateuser", method = RequestMethod.POST, produces = "application/json")
	public ResponseEntity<UserCommonResponse> updateUser(@RequestBody UserEntity user)
			throws ResourceNotFoundException {
		try {
			logger.info("check updateuser: enter into update service");
			userOperationService.update(user);
			return new ResponseEntity<UserCommonResponse>(new UserCommonResponse(USER_UPDATE_SUCCESS, STATUS_200),
					HttpStatus.OK);
		} catch (Exception e) {
			logger.error("update failed with error" + e.getMessage());
			throw new ResourceNotFoundException(USER_UPDATE_FAILED, STATUS_422);
		}
	}

	/**
	 * This service authenticate the user and only admin ca access dashboard
	 * 
	 * @param user
	 *            request entity its contain user updated info.
	 * @return response with user authorize or not
	 * @throws ResourceNotFoundException
	 */

	@RequestMapping(value = "/authenticateuser", method = RequestMethod.POST, produces = "application/json")
	public ResponseEntity<UserCommonResponse> authenticateUser(@RequestBody UserEntity user)
			throws ResourceNotFoundException {
		try {
			logger.info("check authentication: enter into authentication service");
			if (user.getUserName().equals(env.getProperty("admin.user"))
					&& user.getUserPassword().equals(env.getProperty("admin.password"))) {
				logger.info("check Authentcation : Admin user entered");
				return new ResponseEntity<UserCommonResponse>(new UserCommonResponse("Admin", STATUS_200),
						HttpStatus.OK);
			} else {

				if (userOperationService.AuthenticateUser(user).getUserPassword().equals(user.getUserPassword())) {
					logger.info("check authentication: user is authorize but not a admin user");
					return new ResponseEntity<UserCommonResponse>(new UserCommonResponse(USER_FOUND, STATUS_200),
							HttpStatus.OK);
				} else {
					return new ResponseEntity<UserCommonResponse>(new UserCommonResponse(USER_NOTFOUND, STATUS_422),
							HttpStatus.OK);
				}
			}
		} catch (Exception e) {
			logger.error("check authentication: authentication service failed with error:" + e.getMessage());
			throw new ResourceNotFoundException(USER_NOTFOUND, STATUS_422);
		}
	}

	/**
	 * This service provide the list of saved user
	 * 
	 * @return list of save user with all info
	 * @throws ResourceNotFoundException
	 */
	@RequestMapping(value = "/userlist", method = RequestMethod.GET, produces = "application/json")
	public ResponseEntity<List<UserEntity>> getAllUser() throws ResourceNotFoundException {
		try {
			logger.info("check userlist: enter into userlist service");
			List<UserEntity> userEntity = userOperationService.getAllUser();
			return new ResponseEntity<List<UserEntity>>(userEntity, HttpStatus.OK);
		} catch (Exception e) {
			logger.error("check userlist: userlist service failed with error" + e.getMessage());
			throw new ResourceNotFoundException(USER_LIST_NOTFOUND, STATUS_422);
		}
	}

	/**
	 * this service delete user only admin have access
	 * 
	 * @param user
	 *            user request entity its contain user id to delete user .
	 * @return user delete success or failure
	 * @throws ResourceNotFoundException
	 */
	@RequestMapping(value = "/deleteuser", method = RequestMethod.POST, produces = "application/json")
	public ResponseEntity<UserCommonResponse> deletUser(@RequestBody UserEntity user) throws ResourceNotFoundException {

		try {
			logger.info("check delete: enter into delete service");
			userOperationService.deleteUser(user.getUserId());
			return new ResponseEntity<UserCommonResponse>(new UserCommonResponse(USER_DELETE_SUCCESS, STATUS_200),
					HttpStatus.OK);
		} catch (Exception e) {
			logger.error("check delete: delete service failed with error" + e.getMessage());
			throw new ResourceNotFoundException(USER_DELETE_FAILED, STATUS_422);
		}

	}

}
