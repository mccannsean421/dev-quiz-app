import { ref, computed } from 'vue';
import { useStore } from 'vuex';
import router from '../router';

export default function UserLogin() {
  const store = useStore();
  let email = ref('testy.mctestface@test.com');
  let password = ref('password');

  const login = async () => {
    const userReq = await fetch("http://localhost:3030/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email.value,
        password: password.value,
      }),
    });

    const res = await userReq.json();

    const { localStorage } = window;
    localStorage.setItem('user', JSON.stringify(res));

    console.log(store.mutations);
  };

  return {
    email,
    password,
    login,
  }
}
