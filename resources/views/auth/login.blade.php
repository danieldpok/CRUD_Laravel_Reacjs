<x-guest-layout>
<div class="d-flex align-item-center justify-content-center container" style="min-height: 100vh;">
    <div class="w-100" style="max-width: 400px;">
        <div class="card">
        <x-jet-validation-errors class="mb-4" />
        @if (session('status'))
            <div class="mb-4 font-medium text-sm text-green-600">
                {{ session('status') }}
            </div>
        @endif
            <div class="card-body">
                <h2 class="text-center mb-4"> Log in</h2>
                <form method="POST" action="{{ route('login') }}">
                @csrf
                    <div id="email" class="form-group">
                        <label class="form-label">Email</label>
                        <input type="email" name="email" :value="old('email')" required autofocus  class="form-control">
                    </div>
                    <div id="password" class="form-group"><label class="form-label">Password</label><input type="password" name="password" required autocomplete="current-password"  class="form-control"></div><button type="submit"
                        class="w-100 btn btn-primary">Log in</button>
                </form>
            </div>
        </div>
        <div class="w-100 text-center mt-2"></div>
    </div>
</div>
</x-guest-layout>

