document.getElementById('loginTab').addEventListener('click', () => {
        document.getElementById('loginTab').classList.add('active');
        document.getElementById('registerTab').classList.remove('active');
        document.getElementById('loginForm').style.display = 'block';
        document.getElementById('registerForm').style.display = 'none';
    });

    document.getElementById('registerTab').addEventListener('click', () => {
        document.getElementById('registerTab').classList.add('active');
        document.getElementById('loginTab').classList.remove('active');
        document.getElementById('loginForm').style.display = 'none';
        document.getElementById('registerForm').style.display = 'block';
    });

    function switchToRegister() {
        document.getElementById('registerTab').click();
    }
    function switchToLogin() {
        document.getElementById('loginTab').click();
    }

    function handleLogin() {
        alert('✅ 登录成功！');
    }
    function handleRegister() {
        alert('🎉 注册成功！');
    }

    // 验证码倒计时
    let countdown = 60;
    document.getElementById('sendCodeBtn').addEventListener('click', function() {
        const btn = this;
        if (btn.disabled) return;
        btn.disabled = true;
        btn.textContent = countdown + '秒';

        const timer = setInterval(() => {
            countdown--;
            btn.textContent = countdown + '秒';
            if (countdown <= 0) {
                clearInterval(timer);
                btn.disabled = false;
                btn.textContent = '获取验证码';
                countdown = 60;
            }
        }, 1000);
    });