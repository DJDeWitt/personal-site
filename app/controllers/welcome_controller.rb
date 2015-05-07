class WelcomeController < ApplicationController

  def index
    @user = User.new
    @posts = Post.search(params[:search], params[:page]).take(3)
    @projects = Project.search(params[:search], params[:page]).take(3)
  end

end