class AnswersController < ApplicationController
	respond_to :html, :json

	def index
		respond_with current_user.answers
	end

	def show
		respond_with current_user.answers.find(params[:id])
	end
end