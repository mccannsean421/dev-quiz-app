import { fetchUserRepositories } from '@/api/repositories'
import { ref, onMounted, watch } from 'vue'

export default function Login(event, user) {
      e.preventDefault();
      const response = await fetch("http://localhost:3030/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: user.email,
          password: user.password,
        }),
      });

      const res = await response.json();

      const { localStorage } = window;
      localStorage.setItem('user', JSON.stringify(res));

      setUser(res);
}
