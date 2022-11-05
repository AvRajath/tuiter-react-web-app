const WhoToFollowListItem = (who) => {
    return (`
        <div class="list-group-item">
            <img src=${who.avatarIcon} class="rounded-circle float-left" style="max-width: 16%; float: left; padding: 5px;" alt="Cinque Terre"/>
            <button type="button" class="btn btn-primary btn-block rounded-pill" style="float:right; top: 20px; top: 50%; -ms-transform: translateY(50%); transform: translateY(15%);"> Follow </button>
            <div style="left: 15px;">
                <b class="text-white">${who.userName}</b> <i class="fas fa-check-circle"></i>
            </div>
            <div class="text-secondary">
                @${who.handle}
            </div>
        </div>
   `);
}
export default WhoToFollowListItem;
