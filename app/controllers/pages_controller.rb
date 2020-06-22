class PagesController < ApplicationController
  skip_before_action :verify_authenticity_token
  def index
  end

  # def episodes
  #   @episodes = Course.first.episodes
  #   render json: @episodes
  # end

  def courses
    @courses = Course.all
    render json: @courses
  end

  def episodes
    course = Course.find(params[:course_id])
    @episodes = course.episodes
    render json: @episodes
  end

  def subscribe
    @subscriber = Subscriber.new(subscriber_params)
    if @subscriber.email.present?
    @subscriber.save
    render json: {msg: 'Thanks!'}
    end
  end

  def subscriber_params
    params.require(:page).permit(:email)
  end
end
