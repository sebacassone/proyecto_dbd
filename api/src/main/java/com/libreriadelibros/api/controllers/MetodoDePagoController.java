package com.libreriadelibros.api.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.libreriadelibros.api.services.MetodoDePagoService;

@RestController
@RequestMapping("/api/metodo-pago")
public class MetodoDePagoController {
    @Autowired
    MetodoDePagoService metodoDePagoService;



}
