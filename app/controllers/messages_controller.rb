class MessagesController < ApplicationController
  before_action :set_group, only: [:index, :create]

  def index
    @message = Message.new
    @messages = @group.messages.includes(:user)
    respond_to do |format|
      format.html
      format.json { @new_messages = Message.where("id > #{params[:message][:id]}").where(group_id: params[:group_id]) }
    end
  end

  def create
    @message = @group.messages.new(message_params)

    if @message.save
      respond_to do |format|
        format.html { redirect_to group_messages_path(@group), notice: "メッセージが送信されました" }
        format.json
      end

    else
      @messages = @group.messages.includes(:user)
      flash[:notice] = "メッセージを入力して下さい"
      render "index"
    end
  end

private
  def message_params
    params.require(:message).permit(:content, :image).merge(user_id: current_user.id)
  end

  def set_group
    @group = Group.find(params[:group_id])
  end
end
