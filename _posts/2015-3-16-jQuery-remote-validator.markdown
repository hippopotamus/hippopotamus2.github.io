---
layout: post
title: Using jQuery Validation with Flask
date: 2015-03-16
---

I found it a little unclear how to use the remote option with Flask in the jQuery validation library, and the Stack Overflow that I found was definitely not the way to do it. So I looked in the source code and found this [nugget of joy](https://github.com/jzaefferer/jquery-validation/blob/master/src/core.js#L1302). This was a lot simpler than I thought it would be. So here is some code of a working 'remote' validation.  

    # the validation code
    $('#myForm').validate {
        onkeyup: false,
        rules: {
            email: {
                required: true, email: true, remote: {
                    url: '/users/email_exists',
                    type: 'POST',
                    data: {email: () -> $("input[name='email']").val()}
                }
            }
        },

    # the Flask view function
    @users.route('/email_exists', methods=['POST'])
    def email_exists():
        if User.query.filter_by(email=request.form['email']).first():
            return "false"
        return "true"
