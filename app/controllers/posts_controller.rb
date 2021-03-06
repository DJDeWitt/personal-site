class PostsController < ApplicationController
  before_action :set_post, only: [:show, :edit, :update, :destroy]

  # GET /posts
  # GET /posts.json
  def index
    @posts = Post.search(params[:search], params[:page])
  end

  # GET /posts/1
  # GET /posts/1.json
  def show

    redirect_to root_url if @post.published == false

    # Get random posts
    @random_posts = []
    post_array = Post.all
    @random_posts = post_array - [@post]

    # post_number = rand(Post.all.size)
    # random_post = post_array[post_number]
    # while @random_posts < 3
    #   if (Post.all.size > 1)
    #     until random_post != @post
    #       post_number = rand(Post.all.size)
    #       random_post = post_array[post_number]
    #       @random_posts << random_post
    #     end
    #   end
    # end

    if request.path != post_path(@post)
      redirect_to @post, status: :moved_permanently
    end
  end

  # GET /posts/new
  def new
    if current_user
      @post = Post.new
    else
      redirect_to root_url
    end
  end

  # GET /posts/1/edit
  def edit
    if current_user
    else
      redirect_to root_url
    end
  end

  # POST /posts
  # POST /posts.json
  def create
    if current_user
      @post = Post.new(post_params)
      respond_to do |format|
        if @post.save
          format.html { redirect_to @post, notice: 'Post was successfully created.' }
          format.json { render :show, status: :created, location: @post }
        else
          format.html { render :new }
          format.json { render json: @post.errors, status: :unprocessable_entity }
        end
      end
    else
      redirect_to root_url
    end
  end

  # PATCH/PUT /posts/1
  # PATCH/PUT /posts/1.json
  def update
    if current_user
      respond_to do |format|
        if @post.update(post_params)
          format.html { redirect_to @post, notice: 'Post was successfully updated.' }
          format.json { render :show, status: :ok, location: @post }
        else
          format.html { render :edit }
          format.json { render json: @post.errors, status: :unprocessable_entity }
        end
      end
    else
      redirect_to root_url
    end
  end

  # DELETE /posts/1
  # DELETE /posts/1.json
  def destroy
    if current_user
      @post.destroy
      respond_to do |format|
        format.html { redirect_to posts_url, notice: 'Post was successfully destroyed.' }
        format.json { head :no_content }
      end
    else
      redirect_to root_url
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_post
      @post = Post.friendly.find(params[:id])
      # @post = Post.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def post_params
      params.require(:post).permit(:title, :dek, :body, :published, :image)
    end
end
