class UsersController < ApplicationController
  def edit
  end

  def update
    if current_user.update(user_params)
      redirect_to root_path
    else
      render :edit
    end
  end
# ユーザーのupdateに成功した場合は、redirect to root_pathして、
#失敗した場合は、usersコントローラーのeditアクションを呼び出してくれる
  private

  def user_params
    params.require(:user).permit(:name,:email)
  end
end
