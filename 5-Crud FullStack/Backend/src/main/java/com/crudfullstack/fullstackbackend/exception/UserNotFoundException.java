package com.crudfullstack.fullstackbackend.exception;

public class UserNotFoundException extends  RuntimeException{
    public UserNotFoundException(Long id){
        super("No se puede encontrar el usuario con este id"+ id);
    }
}
