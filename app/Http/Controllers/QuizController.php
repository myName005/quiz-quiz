<?php

namespace App\Http\Controllers;


use Illuminate\Http\Request;
use JWTAuth;
use App\Quiz;
use App\Question;
use App\Answer;
use App\Http\Resources\QuizResource;

class QuizController extends Controller
{
    
    public function create(Request $request)
    {
    	$request->validate([
    		'title'=>'required|max:255',
    		'description'=>'required',
    		'questions'=>'required',
    		'questions.*.question'=>'required',
    		'questions.*.answers'=>'required',
    		'questions.*.right_answer'=>'required|min:0'
    	]);

        $quiz = new Quiz();
        $quiz->title = $request->input('title');
        $quiz->description = $request->input('description');
        $quiz->user_id = JWTAuth::parseToken()->toUser()->id;
        $quiz->save();

        foreach($request->input('questions') as $questionInput )
        {
            $question = new Question();
            $question->question = $questionInput['question'];
            $question->right_answer = $questionInput['right_answer'];
            $question->quiz_id = $quiz->id;
            $question->save();
            foreach($questionInput['answers'] as $answerInput)
            {
                $answer = new Answer();
                $answer->answer = $answerInput;
                $answer->question_id = $question->id;
                $answer->save();
            }
        }
    	
    	return print_r($request->all(), true);
    }

    public function show(Quiz $quiz)
    {
        $quiz->load('questions');
        $quiz->questions->load('answers');
        return response()->json( $quiz );
    }

    public function list()
    {
        return Quiz::paginate(12);
    }
}
