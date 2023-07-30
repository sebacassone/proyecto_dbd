package com.libreriadelibros.api.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.libreriadelibros.api.repositories.MetodoDePagoRepository;

@Service
public class MetodoDePagoService {
    @Autowired
    MetodoDePagoRepository metodoDePagoRepository;

}
