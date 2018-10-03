<?php

namespace App\Controller;

use Symfony\Component\HttpFoundation\Response;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Request;

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
 
  /**
   * @Route("/list/create/save/", name="form_user_save")
   */
  public function new(Request $request)
  {
      // just setup a fresh $task object (remove the dummy data)
      $question = new QuestionType();
  
      $form = $this->createFormBuilder($question)
          ->add('text', TextType::class)
          ->add('save', SubmitType::class, array('label' => 'Create Task'))
          ->getForm();
  
      $form->handleRequest($request);
  
      if ($form->isSubmitted() && $form->isValid()) {
          // $form->getData() holds the submitted values
          // but, the original `$task` variable has also been updated
          $question = $form->getData();
  
          // ... perform some action, such as saving the task to the database
          // for example, if Task is a Doctrine entity, save it!
         $entityManager = $this->getDoctrine()->getManager();
         $entityManager->persist($question);
         $entityManager->flush();
  
          return $this->redirectToRoute('list_page.twig.html');
      }
  
      return $this->render('create_page.twig.html', array(
          'form' => $form->createView(),
      ));
  }

}