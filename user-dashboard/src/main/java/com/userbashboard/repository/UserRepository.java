package com.userbashboard.repository;

import javax.transaction.Transactional;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.PagingAndSortingRepository;

import com.userbashboard.model.UserEntity;

@Transactional
public interface UserRepository extends CrudRepository<UserEntity, Long>
{
	
public  UserEntity findByUserName(String username);
}
