<tr>
<td class="header">
<a href="{{ $url }}" style="display: inline-block;">
@if (trim($slot) === 'Laravel')
<img src="https://jobfi-io.imgix.net/bbblogo.png" class="logo" alt="JobFi Logo">
@else
{{ $slot }}
@endif
</a>
</td>
</tr>
