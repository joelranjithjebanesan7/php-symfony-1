<?php

namespace App\Controller;

use Symfony\Component\HttpFoundation\Response;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\Routing\Annotation\Route;

class FormUserController extends Controller{


 /** 
  * @Route("/list/", name="form_user__list_page")
  */
    public function list(){

        $number = random_int(0,10);

        return $this->render('list_page.twig.html',array('number' =>$number));
    }


 /** 
  * @Route("/list/create/", name="form_user__create_page")
  */
  public function create(){

    $message = "Create your message";
    

    return $this->render('create_page.twig.html',array('message' =>$message));
}

}