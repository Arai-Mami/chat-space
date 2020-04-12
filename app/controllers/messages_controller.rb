class MessagesController < ApplicationController
  def index
    @group = Group.find(params[:group_id])
    @messages = Message.where(group_id: params[:group_id])
  end
end
