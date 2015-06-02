class GamesController < ApplicationController
  before_action :set_game, only: [:show, :edit, :update, :destroy]

  # GET /games
  # GET /games.json
  def index
    @games = Game.search(params[:search], params[:page])
  end

  # GET /games/1
  # GET /games/1.json
  def show
    if request.path != game_path(@game)
      redirect_to @game, status: :moved_permanently
    end
  end

  # GET /games/new
  def new
    if current_user
      @game = Game.new
    else
      redirect_to root_url
    end
  end

  # GET /games/1/edit
  def edit
    if current_user
    else
      redirect_to root_url
    end
  end

  # POST /games
  # POST /games.json
  def create
    if current_user
      @game = Game.new(game_params)
      respond_to do |format|
        if @game.save
          format.html { redirect_to @game, notice: 'Game was successfully created.' }
          format.json { render :show, status: :created, location: @game }
        else
          format.html { render :new }
          format.json { render json: @game.errors, status: :unprocessable_entity }
        end
      end
    else
      redirect_to root_url
    end
  end

  # PATCH/PUT /games/1
  # PATCH/PUT /games/1.json
  def update
    if current_user
      respond_to do |format|
        if @game.update(game_params)
          format.html { redirect_to @game, notice: 'Game was successfully updated.' }
          format.json { render :show, status: :ok, location: @game }
        else
          format.html { render :edit }
          format.json { render json: @game.errors, status: :unprocessable_entity }
        end
      end
    else
      redirect_to root_url
    end
  end

  # DELETE /games/1
  # DELETE /games/1.json
  def destroy
    if current_user
      @game.destroy
      respond_to do |format|
        format.html { redirect_to games_url, notice: 'Game was successfully destroyed.' }
        format.json { head :no_content }
      end
    else
      redirect_to root_url
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_game
      @game = Game.friendly.find(params[:id])
      #@game = Game.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def game_params
      params.require(:game).permit(:name, :description, :body, :image, :published)
    end
end
