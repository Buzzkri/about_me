class SkillsController < ApplicationController
    before_action :set_skills, only: [:show, :update, :destroy]
  
    def index
      render json: Skill.all
    end
  
    def show
      render json: @skill
    end
  
    def create
      skill = Skill.create(skill_params)
      if skill.save
        render json: skill
      else
        render json skill.errors, status: 422
      end
    end
  
    def update
      if @skill.update(skill_params)
        render json: @skill
      else
        render json @skill.errors, status: 422
      end
    end
  
    def destroy
      @skill.destroy
    end
  
    private
    def set_department
      @skill = Skill.find(params[:id])
    end
  
    def skill_params
      params.require(:Skill).permit(:name)
    end
  
  end
end
