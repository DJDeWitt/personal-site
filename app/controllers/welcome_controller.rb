class WelcomeController < ApplicationController

  def index
    @user = User.new
    @posts = Post.search(params[:search], params[:page]).take(5)
    @projects = Project.search(params[:search], params[:page]).take(5)
  end

end