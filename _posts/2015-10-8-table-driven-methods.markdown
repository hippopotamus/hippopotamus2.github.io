---
layout: post
title: Table Driven Methods
date: 2015-10-08
---

I've had a few situations at work that table driven methods were a really great fit for. It's a really great pattern for situations where you have a lot of branching but one line of logic.  
I've been doing mostly Python the last week, which has been really fun. If you haven't played with Python, you're missing out (you'll get used to the whole white space and no closures thing).  

Let's imagine we have a dispatcher. And the dispatcher will route them to the proper routines.  
```py
# app.py
def send_sms(data):
    sent = sms_api.send_text(data['to'], data['text'])
    if send.status == 200:
        return {"success": True, "message": "SMS sent"}
    else:
        return {"success": False, "message": "SMS Failed"}

def send_letter(data):
    notify_mail_room(data['to'], data['text'], data['deliver_by'])
    return {"success": True, "message": "Feel free to save paper and only receive emails"}

# etc

dispatcher = {
    "sms": send_sms,
    "email": send_email,
    "snail_mail": send_letter
}

def dispatch(message):
    '''
    Takes the method that maps to the dispatcher type and calls it with the JSON data as a parameter
    '''
    method = dispatcher.get([message['type']])
    return method(message['data']) if method else {"success": False, "message": "Method not found"}
```

If I call `dispatch({"type": "sms", "data": {"to": "12314", "text": "don't forget your umbrella"}})`, it will route to send_sms.  
If I call `dispatch({"type": "snail_mail", "data": {"to": "12314", "text": "pay your bill", "deliver_by": "Next Friday"}})`, it will route to send_letter.

What I really like about this pattern is that in the future, as you add more features, you can write the method and stick the mapping in the dispatcher dictionary. It does a really good job at separating concerns and no more huge if, else ifs.
