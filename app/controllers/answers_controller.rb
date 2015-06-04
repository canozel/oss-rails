class AnswersController < ApplicationController
	respond_to :html, :json

	def index
		respond_with current_user.answers
	end

	def create
		respond_with Answer.create(user_id: current_user.id, exam_no: params[:exam_no], exam_answer: params[:exam_answer])
	end
end