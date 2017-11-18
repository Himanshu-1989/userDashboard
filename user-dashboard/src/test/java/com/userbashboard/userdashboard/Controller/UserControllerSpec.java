package com.userbashboard.userdashboard.Controller;

import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.test.context.junit4.SpringRunner;

import com.userbashboard.common.UserCommonResponse;
import com.userbashboard.common.exception.ResourceNotFoundException;
import com.userbashboard.controller.UserController;
import com.userbashboard.model.UserEntity;
import com.userbashboard.service.UserService;

import static com.userbashboard.common.UserConstants.*;
import static org.mockito.Mockito.*;

import java.util.ArrayList;
import java.util.List;

@RunWith(SpringRunner.class)
@SpringBootTest
public class UserControllerSpec {
	
	
	@Mock
	UserService userService;
	
	@Autowired
	UserController userController;

	
	@Before
    public void setUp() {
		userService = mock(UserService.class);
        }
	
	@Test
	public void getData() throws ResourceNotFoundException {
		UserEntity userEntity=new UserEntity();
		userEntity.setUserName("Himanshu");
		userEntity.setUserPassword("1234");
		userEntity.setUserEmail("himanshu.navin@gmail.com");
		UserCommonResponse res=new UserCommonResponse();
		res.setMessage(USER_UPDATE_SUCCESS);
		res.setStatusCode(STATUS_200);
		List<UserEntity> user=new ArrayList<UserEntity>();
		user.add(userEntity);
		Mockito.when(userService.getAllUser()).thenReturn(user);
		
		//when
		ResponseEntity<List<UserEntity>> response=userController.getAllUser();
		
		//then
		Assert.assertEquals("Himanshu",response.getBody().get(0).getUserName());
	}

	
	@Test
	public void savedata() throws ResourceNotFoundException {
		UserEntity userEntity=new UserEntity();
		userEntity.setUserName("Himanshu");
		userEntity.setUserPassword("1234");
		userEntity.setUserEmail("himanshu.navin@gmail.com");
		UserCommonResponse res=new UserCommonResponse();
		res.setMessage(USER_SAVED_SUCCESS);
		res.setStatusCode(STATUS_200);
		Mockito.when(userService.saveData(userEntity)).thenReturn(res.getMessage());
		
		//when
		ResponseEntity<UserCommonResponse> response=userController.saveUser(userEntity);
		
		//then
		Assert.assertEquals(USER_SAVED_SUCCESS,response.getBody().getMessage() );
	}

	
	
	@Test
	public void deleteData() throws ResourceNotFoundException {
		UserEntity userEntity=new UserEntity();
		userEntity.setUserId(12);
		userEntity.setUserName("Himanshu");
		userEntity.setUserPassword("1234");
		userEntity.setUserEmail("himanshu.navin@gmail.com");
		UserCommonResponse res=new UserCommonResponse();
		res.setMessage(USER_DELETE_SUCCESS);
		res.setStatusCode(STATUS_200);
		
		Mockito.when(userService.deleteUser(userEntity.getUserId())).thenReturn(res.getMessage());
		Assert.assertEquals(USER_DELETE_SUCCESS,res.getMessage() );	
		
	}

	
	
	
	
}


